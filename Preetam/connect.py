import mysql.connector as c
from flask import Flask, render_template

con=c.connect(host="localhost",user="root",password="qwerty",database="DATABASE1")
if con.is_connected():
    print("SUCCESSFULLY CONNECTED")

cursor=con.cursor()


# while True:
#     id=input("Enter ID: ")
#     age=input("Enter age: ")
#     loc=input("Enter location: ")
#     gen=input("Enter gender: ")
#     dominos=input("Enter dominos: ")
#     starbucks=input("Enter starbucks: ")
#     mcd=input("Enter Macdonalds: ")

    
#     query="insert into STORE1 values('{}',{},'{}','{}',{},{},{})".format(id,age,loc,gen,dominos,starbucks,mcd)
#     cursor.execute(query)
#     con.commit()
#     print("Data inserted successfully")
#     x=int(input("0->exit  1->enter more"))
#     if x==0:
#         break
   
q="select * from store1"
cursor.execute(q)
data=cursor.fetchmany(20)

# for i in data:
#     print(i)





app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', my_tuple=data)

if __name__ == '__main__':
    app.run(debug=True)




