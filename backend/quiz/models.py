from django.db import models
from django.db.models.fields import BLANK_CHOICE_DASH
from django.utils.translation import gettext_lazy as _

class Updated(models.Model):

    date_updated = models.DateTimeField(
        verbose_name=_("Last Updated"), auto_now=True)

    class Meta:
        abstract = True


class Question(Updated):

    class Meta:
        verbose_name = _("Question")
        verbose_name_plural = _("Questions")
        
    id = models.AutoField(primary_key=True, editable=False)
    question = models.CharField(max_length=255, verbose_name=_("Title"))
    image = models.CharField(max_length=255)
    correct_answer = models.CharField(max_length=255)
    incorrect_answer_1 = models.CharField(max_length=255)
    incorrect_answer_2 = models.CharField(max_length=255)
    incorrect_answer_3 = models.CharField(max_length=255)
    date_created = models.DateTimeField(
        auto_now_add=True, verbose_name=_("Date Created"))

    def __str__(self):
        return self.question

    def __str__(self):
        return str(self.id)