import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from models import Profile, SkillCategory, Project, Experience, Education, Certification, Activity
import data as d

load_dotenv()

FRONTEND_ORIGIN = os.getenv("FRONTEND_ORIGIN", "*")

app = FastAPI(title="Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_ORIGIN] if FRONTEND_ORIGIN != "*" else ["*"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Portfolio API is running successfully."}

@app.get("/api/profile", response_model=Profile)
def get_profile():
    return d.PROFILE

@app.get("/api/skills", response_model=list[SkillCategory])
def get_skills():
    return d.SKILLS

@app.get("/api/projects", response_model=list[Project])
def get_projects():
    return d.PROJECTS

@app.get("/api/experience", response_model=list[Experience])
def get_experience():
    return d.EXPERIENCE

@app.get("/api/education", response_model=list[Education])
def get_education():
    return d.EDUCATION

@app.get("/api/certifications", response_model=list[Certification])
def get_certifications():
    return d.CERTIFICATIONS

@app.get("/api/activities", response_model=list[Activity])
def get_activities():
    return d.ACTIVITIES
