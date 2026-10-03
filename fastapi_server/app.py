from fastapi import FastAPI 
from pydantic import BaseModel
class Student(BaseModel):
    stuname:str
    studept:str
    stuudername:str
    stupassword:str
    stuage:int
    stumark:float

app = FastAPI()
#localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    return "Get students method called"
#localhost8000/addStudent
@app.post("/addStudent")
def addStudent(stu:Student):
    return {"student_details":stu}



#localhost8000/updateStudent
@app.put("/updateStudent")
def updateStudent():
    return "Update student method called"
#localhost8000/deleteStudent
@app.delete("/deleteStudent")
def deleteStudent():
    return "Delete student method called"
@app.get("/getParticularStudent/{id}")
def getParticularStudent(id:int):
    return {"userid":id}
#localhost:8000/filterdept?dept="CSE"&mark=65
@app.get("/filterdept")
def filterdept(dept:str,mark:int):
    return {"dept":dept,"mark":mark}
