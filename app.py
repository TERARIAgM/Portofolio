from flask import Flask, render_template, request
import random

app = Flask(__name__)

watak_list = [
    "si tukang ngising bae", "Si paling wala takrob", "Si tukang putsal",
    "Si penikmat barang pajuh tapi hulap Masak", "si tukang gosip", "Si Rajin ibadah tapi suka tobrut",
    "Si tukang chat tapi telok dibales", "Si tukang ribut", "Si Pelupa tapi rajin ibadah",
    "Si Tukang barbar", "Si Pendiam tapi diam diam menghanyutkan", "Si Suka Ngeprank Orang",
    "Si tukang pamer", "Si Pemalu Yang Tiba-tiba sok berani", "Si Tukang Selfie padah benget goreng",
    "Si Suka janda padahal si dia ada", "Si Suka Curhat Tapi Gak di Dengerin Orang", "Si Tukang Baper",
    "Si paling yali yalili", "Si Pemburu Wi-Fi Gratis"
]

khodam_list = [
    "kodam maung kacekek pager", "kodam anjing suara kebo", "kodam Pocong hiber",
    "iblis si tukang ngising", "kodam sirem sakali nyoco paeh", "kodam buto ijo tapi warnanya merah",
    "Lele Si Tukang Ngomongkeun Jalma", "kodam tuyul bahyul", "kodam cakcak hiber",
    "Babi Ngepet Si Pemburu Tempe", "kodam monyet eweh buntutan", "Kucing Hideung Si Pencuri Kadaharan",
    "kodam suster morosot", " Gendruwo Si Pemilik Tiket Sinetron", "Laba-laba Si Pembuat nasgor",
    "Cacing Si Penasihat Hirup", "kodam monyet sia monyetna", "kodam ucing garong",
    "kodam mbe mamawa bedog", "kodam oray bisa ngajlot"
]

pacar_list = [
   "ukhty spek yali yalili", "tobrut brutal", "ninja nini=nini janda", "duda firaun",
   "bidadari skop skop", "siamah teboga kabogoh bengetna kudu di renovasi", "ukhty cinta agama", "sicantik mempesona tpi anak kiyai",
   "ukhty kobong", "babi pink cute", "orang korea anak  haji romlah", "pak muh",  "maaf masa depan anda suram", "anak tuyul",
]

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/tutorial')
def tutorial():
    return render_template('tutorial.html')

@app.route('/video')
def video():
    return render_template('video.html')

@app.route('/result', methods=['POST'])
def result():
    nama = request.form['nama']
    pilihan = request.form['pilihan']

    if pilihan == 'watak':
        hasil = random.choice(watak_list)
        tipe = "Watak"
    elif pilihan == 'khodam':
        hasil = random.choice(khodam_list)
        tipe = "Khodam"
    elif pilihan == 'pacar':
        hasil = random.choice(pacar_list)
        tipe = "Pacar"
    else:
        hasil = "Pilihan tidak valid"
        tipe = "Error"

    return render_template('result.html', nama=nama, tipe=tipe, hasil=hasil)

if __name__ == '__main__':
    app.run(debug=True)
