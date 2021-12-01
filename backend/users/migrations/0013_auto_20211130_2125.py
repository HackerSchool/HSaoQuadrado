# Generated by Django 3.2.5 on 2021-11-30 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0012_subjectinfo_index'),
    ]

    operations = [
        migrations.AddField(
            model_name='achievement',
            name='subject',
            field=models.CharField(choices=[('Matemática', 'Matemática'), ('Física-Química', 'Física-Química'), ('Geral', 'Geral')], default='geral', max_length=50),
        ),
        migrations.AlterField(
            model_name='subjectinfo',
            name='subject',
            field=models.CharField(choices=[('Matemática', 'Matemática'), ('Física-Química', 'Física-Química'), ('Geral', 'Geral')], max_length=50),
        ),
    ]