# Generated by Django 3.2.5 on 2021-08-11 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_profile_xp'),
    ]

    operations = [
        migrations.CreateModel(
            name='Achievement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('xp', models.IntegerField()),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=500)),
            ],
        ),
        migrations.AddField(
            model_name='profile',
            name='achievements',
            field=models.ManyToManyField(null=True, related_name='achievements', to='users.Achievement'),
        ),
    ]
