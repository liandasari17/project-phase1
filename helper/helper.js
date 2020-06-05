const nodemailer = require('nodemailer');
class Helper {

    static totalCredit (data) {
        let total = 0 
        if (data.Subjects.length > 0){
            for (let i = 0 ; i < data.Subjects.length ; i++){
                total += data.Subjects[i].credits
            } 
        }
        return total
    }

    static sendEmail (subject,message) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth : {
                user: 'mahasiswa.rajin2020@gmail.com',
                pass: 'aditlianda123'
            }
        })
        let mailOption = {
            from: 'mahasiswa.rajin2020@gmail.com',
            to: 'mahasiswa.rajin2020@gmail.com',
            subject: subject,
            text: message
        }
        transporter.sendMail(mailOption, (err, data)=>{
            if(err){
                console.log(err)
            }else {
                console.log('email sent')
            }
        })   
    
    }
}

module.exports = Helper