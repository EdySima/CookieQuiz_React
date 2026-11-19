from rest_framework import serializers
from .models import Question


class RandomQuestionSerializer(serializers.ModelSerializer):

    class Meta:
    
        model = Question
        fields = [
            'id',
            'question',
            'image', 
            'correct_answer',
            'incorrect_answer_1',
            'incorrect_answer_2',
            'incorrect_answer_3',
        ]
