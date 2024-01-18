import cv2
camera = cv2.VideoCapture(0)

def gen_frame ():
    while True:
        sucess,frame = camera.read()
        if not sucess:
            break
        else:
            ret,buffer = cv2.imencode('.jpg',frame)
            frame=buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

from flask import Flask, render_template, Response
app = Flask(__name__,template_folder="templates")
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/video_feed')
def video_feed():
    return Response(gen_frame(), mimetype='multipart/x-mixed-replace; boundary=frame')
if __name__=="__main__":    
    app.run(debug=False,port=100)