# Generated by Django 4.1.4 on 2022-12-16 10:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('making', '0003_alter_workorder_is_finished'),
    ]

    operations = [
        migrations.AddField(
            model_name='workorder',
            name='start_date',
            field=models.DateField(blank=True, null=True, verbose_name='Дата начала, план'),
        ),
    ]