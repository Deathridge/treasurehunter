# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Clue',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('Latitude', models.DecimalField(max_digits=10, decimal_places=10)),
                ('Longitude', models.DecimalField(max_digits=10, decimal_places=10)),
                ('Altitude', models.DecimalField(max_digits=10, decimal_places=10)),
                ('clue_text', models.TextField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('Clues', models.ForeignKey(to='finder.Clue')),
                ('Username', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
