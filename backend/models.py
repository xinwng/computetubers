from django.db import models
from uuid import uuid4


def generateUUID():
    return str(uuid4())

# Create your models here.


class Videos(models.Model):
    videoId = models.CharField(
        max_length=50, primary_key=True, default=generateUUID)
    title = models.CharField(max_length=500)
    publishedAt = models.CharField(max_length=50)
    channelId = models.CharField(max_length=50, default=generateUUID)
    channelTitle = models.CharField(max_length=50)
    categoryId = models.IntegerField()
    trendingDate = models.CharField(max_length=50)
    tags = models.TextField()
    numberOfTags = models.IntegerField()
    viewCount = models.IntegerField()
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    commentCount = models.IntegerField()
    thumbnailLink = models.CharField(max_length=100)
    commentsDisabled = models.BooleanField()
    ratingsDisabled = models.BooleanField()
    description = models.TextField()

    def __str__(self):
        return self.videoId
