from rest_framework import serializers
from .models import Note

"""
Сериализаторы позволяют преобразовывать сложные данные, такие как наборы запросов и экземпляры 
модели, в собственные типы данных Python, которые затем могут быть легко преобразованы в JSON,
"""

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'title', 'body', 'created_at')
