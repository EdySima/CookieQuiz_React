from rest_framework import generics
from rest_framework.response import Response
from .models import  Question
from .serializers import  RandomQuestionSerializer
from rest_framework.views import APIView

class RandomQuestion(APIView):
    
    def get(self, request):
        questions = Question.objects.all()
        serializer = RandomQuestionSerializer(questions, many=True)
        return Response(serializer.data)