package com.lijie.controller;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import com.lijie.component.PhoneRandomBuilder;
import com.lijie.redis.StringRedisServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @author: lijie
 * Describe: 注册获得手机验证码
 */
@Controller
public class GetPhoneCodeControl {

    @Autowired
    StringRedisServiceImpl stringRedisService;

    private static final String REGISTER = "register";

    @PostMapping("/getCode")
    @ResponseBody
    public int getAuthCode(HttpServletRequest request){

        String phone = request.getParameter("phone");
        String sign = request.getParameter("sign");
        String trueMsgCode = PhoneRandomBuilder.randomBuilder();
        System.out.println("验证码：" + trueMsgCode);

//        在redis中保存手机号验证码并设置过期时间
        stringRedisService.set(phone, trueMsgCode);
        stringRedisService.expire(phone, 300);

        String msgCode = "SMS_179615912";
        //注册的短信模板
        if(REGISTER.equals(sign)){
            msgCode = "SMS_179615911";
        }
        //改密码的短信模板
        else {
            msgCode = "SMS_179605939";
        }

        SendSmsResponse sendSmsResponse = null;
        try {
            sendSmsResponse = sendSmsResponse(phone, trueMsgCode, msgCode);
        } catch (ClientException e) {
            e.printStackTrace();
            return 0;
        }

        return 1;
    }

    public static SendSmsResponse sendSmsResponse(String phoneNumber, String code, String msgCode) throws ClientException {

        //可自助调整超时时间
        System.setProperty("sun.net.client.defaultConnectTimeout", "10000");
        System.setProperty("sun.net.client.defaultReadTimeout", "10000");
        //"***"分别填写自己的AccessKey ID和Secret
        IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou", "LTAI4FcuAQsqo5NcVzPRbuaq", "iujPrmrYW0GnYOTpNfyHMzXi5PtoNn");
        DefaultProfile.addEndpoint("cn-hangzhou", "cn-hangzhou", "Dysmsapi", "dysmsapi.aliyuncs.com");
        IAcsClient acsClient = new DefaultAcsClient(profile);
        SendSmsRequest request = new SendSmsRequest();
        //填写接收方的手机号码
        request.setPhoneNumbers(phoneNumber);
        //此处填写已申请的短信签名
        request.setSignName("程序猿阿杰");
        //此处填写获得的短信模版CODE
        request.setTemplateCode(msgCode);
        //笔者的短信模版中有${code}, 因此此处对应填写验证码
        request.setTemplateParam("{\"code\":\"" + code + "\"}");
        SendSmsResponse sendSmsResponse = acsClient.getAcsResponse(request);
        System.out.println(sendSmsResponse.getMessage());
        return sendSmsResponse;
    }



}
