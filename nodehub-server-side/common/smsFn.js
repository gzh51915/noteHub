function getSms(phonenumber) {
    return new Promise((resolve, reject) => {
        console.log('短信进来了')
        // 短信验证码
        const smsCode = getCode();
        //引入SDK
        const SMSClient = require('@alicloud/sms-sdk')
        // accessKeyId /secretAccessKey 根据实际申请的账号信息进行替换
        const accessKeyId = 'LTAI4FpLuwPKtadJPRgbDWKt';
        const secretAccessKey = 'QcrGCysQKXiPggeuOuN3ML5p5GzXTK';
        //初始化sms_client
        let smsClient = new SMSClient({ accessKeyId, secretAccessKey });
        //发送短信
        smsClient.sendSMS({
            PhoneNumbers: phonenumber,//必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为：国际区号+号码，如“85200000000”
            //以下短信签名和模板填入自己申请的即可
            SignName: 'noteHub',//必填:短信签名-可在短信控制台中找到
            TemplateCode: 'SMS_193238858',//必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
            TemplateParam: `{"code":'${smsCode}'}`//可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时。
        }).then(function (res) {
            resolve(smsCode)
        }, function (err) {
            reject(err)
        })
    })
}

//产生随机数
function getCode() {
    let str = "";
    for (let i = 0; i < 4; i++) {
        str += parseInt(Math.random() * 10);
    }
    return str;
};

module.exports = getSms


