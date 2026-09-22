from pydantic import BaseModel
from typing import List, Optional

class Profile(BaseModel):
    name: str
    headline: str
    location: str
    email: str
    description: str
    tech_line: List[str]
    github: str
    linkedin: str
    resume: str

class SkillCategory(BaseModel):
    category: str
    skills: List[str]

class Project(BaseModel):
    id: str
    name: str
    subtitle: str
    status: Optional[str] = None
    description: str
    technologies: List[str]
    features: List[str]
    github_url: str
    live_url: Optional[str] = None
    category: str  # "backend" | "fullstack" | "team"

class Experience(BaseModel):
    company: str
    location: str
    position: str
    duration: str
    project_name: str
    description: str
    responsibilities: List[str]
    start_year: str
    end_year: str

class Education(BaseModel):
    degree: str
    full_degree: str
    university: str
    location: str
    duration: str
    cgpa: str
    status: Optional[str] = None

class Certification(BaseModel):
    name: str
    issuer: str
    url: Optional[str] = None

class Activity(BaseModel):
    title: str
    description: str
