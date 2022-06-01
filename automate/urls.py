
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path('', include('membership.urls')),
    path('',include('blogs.urls')),
    path('', include('payments.urls')),

    
    path('accounts/', include('accounts.urls')),
    path('tinymce/', include('tinymce.urls')),
    path("ckeditor/", include('ckeditor_uploader.urls')),
    path('accounts/login/', auth_views.LoginView.as_view(template_name='accounts/login.html'),name='login'),
    path('password-reset/', auth_views.PasswordResetView.as_view(template_name='accounts/password_reset.html'),name='password_reset'),
    path('password-reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='accounts/password_reset_done.html'),name='password_reset_done'),
    path('password-reset-confirm/<uidb64>/<token>//', auth_views.PasswordResetConfirmView.as_view(template_name='accounts/password_reset_confirm.html'),name='password_reset_confirm'),
    path('password-reset-complete/', auth_views.PasswordResetCompleteView.as_view(template_name='accounts/password_reset_complete.html'),name='password_reset_complete'),
    path('logout/', auth_views.LogoutView.as_view(template_name='accounts/logout.html'), name='logout')
]

if settings.DEBUG:
    urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns+= static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)