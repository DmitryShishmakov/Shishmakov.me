from django.contrib import admin
from app.defapp.models import Category, Data, Comments

class DataAdmin(admin.ModelAdmin):
	list_display = ('header', 'address', 'date')
	search_fields = ('header', 'address')
	date_hierarchy = 'date'
	ordering = ('-date',)

class CommentsAdmin(admin.ModelAdmin):
	list_display = ('name', 'email', 'date')
	search_fields = ('name', 'message', 'email')
	date_hierarchy = 'date'
	ordering = ('-date',)

admin.site.register(Category)
admin.site.register(Data, DataAdmin)
admin.site.register(Comments, CommentsAdmin)