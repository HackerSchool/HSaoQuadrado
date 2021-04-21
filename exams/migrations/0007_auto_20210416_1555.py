# Generated by Django 3.1.7 on 2021-04-16 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exams', '0006_auto_20210416_1551'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='wrongAnswer',
        ),
        migrations.AddField(
            model_name='question',
            name='wrongAnswers',
            field=models.ManyToManyField(related_name='wrongAnswers', to='exams.Answer'),
        ),
    ]