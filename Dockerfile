FROM java:8

COPY JavaBuild.java .

RUN javac JavaAutoBuild.java



CMD ["java", "JavaBuild"]
