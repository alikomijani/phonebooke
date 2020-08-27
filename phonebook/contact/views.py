from django.contrib.auth import login
from django.shortcuts import render
from rest_framework import filters

# Create your views here.
from django_filters.rest_framework import DjangoFilterBackend
from knox.models import AuthToken
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from knox.views import LoginView as KnoxLoginView
from .models import Contact
from .serializers import ContactSerializer, RegisterSerializer, UserSerializer, LoginUserSerializer


class LoginView(KnoxLoginView):
    permission_classes = ()
    serializer_class = LoginUserSerializer

    def post(self, request, format=None):
        serializer = LoginUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginView, self).post(request, format=None)


class RegisterAPIView(generics.GenericAPIView):
    permission_classes = []
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token[1],
            "expiry": token[0].expiry
        })


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = ContactSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    filterset_fields = ['is_favorite', ]
    search_fields = ['first_name', 'last_name', 'mobile', 'email']

    def get_queryset(self):
        queryset = Contact.objects.filter(owner=self.request.user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
