# encoding: utf-8
from django.db import models

class Category(models.Model):
	title = models.CharField(max_length=50, verbose_name='Название категории')

	def __unicode__(self):
		return self.title

class Data(models.Model):
	address = models.CharField(max_length=150, verbose_name='Адрес')
	header = models.CharField(max_length=150, verbose_name='Заголовок')
	description = models.CharField(max_length=200, blank=True, verbose_name='Описание (meta)')
	keywords = models.CharField(max_length=120, blank=True, verbose_name='Ключевые слова (meta)')
	data = models.TextField(blank=True, verbose_name='Текст страницы')
	preview = models.CharField(max_length=30, blank=True, verbose_name='Текст превью (для блога)')
	category = models.ForeignKey(Category, verbose_name='Категория страницы')
	date = models.DateField(verbose_name='Дата публикации')

	def __unicode__(self):
		return self.header

class Comments(models.Model):
	parent = models.IntegerField(verbose_name='Родительский комментарий (иначе 0)')
	data = models.ForeignKey(Data, verbose_name='Комментарий к записи')
	admin = models.BooleanField(verbose_name='от имени администратора')
	name = models.CharField(max_length=40, verbose_name='Имя')
	message = models.TextField(verbose_name='Сообщение')
	email = models.EmailField(blank=True, verbose_name='E-mail')
	url = models.URLField(blank=True, verbose_name='Сайт')
	date = models.DateField(verbose_name='Дата публикации')

	def __unicode__(self):
		return self.message