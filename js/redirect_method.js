jQuery(document).ready(function($){var formid;var formid_long;document.addEventListener('wpcf7mailsent',function(event){var id_long=event.detail.id;var id=event.detail.contactFormId;var formid=id_long;var formid=id;var forms=cf7rl_ajax_object.cf7rl_forms;var array_list=forms.split(",");array_list.forEach(function(item){var result_url=forms.indexOf(id+'|url');var result_thank=forms.indexOf(id+'|thank');var item_list=item.split("|");if(item_list[1]==id){var url=item_list[3];var tab=item_list[4];if(result_url>-1){if(tab==0){window.location.href=url}
if(tab==1){var win=window.open(url,'_blank');win.focus()}}
if(result_thank>-1){var data={'action':'cf7rl_get_form_thank','formid':formid,};jQuery.ajax({type:"POST",data:data,dataType:"json",async:!1,url:cf7rl_ajax_object.cf7rl_ajax_url,xhrFields:{withCredentials:!0},success:function(response){var formidPrefix='wpcf7-f';var formid_new=formidPrefix+formid;jQuery('[id^="'+formid_new+'"]').html(response.html)}})}}})},!1);if(jQuery('.wpcf7-mail-sent-ok')[0]){var id_long=jQuery('.wpcf7-mail-sent-ok').closest('.wpcf7').attr("id");var id=id_long.split('f').pop().split('-').shift();var formid=id_long;var formid=id;var forms=cf7rl_ajax_object.cf7rl_forms;var array_list=forms.split(",");array_list.forEach(function(item){var result_url=forms.indexOf(id+'|url');var result_thank=forms.indexOf(id+'|thank');var item_list=item.split("|");if(item_list[1]==id){var url=item_list[3];var tab=item_list[4];if(result_url>-1){if(tab==0){window.location.href=url}
if(tab==1){var win=window.open(url,'_blank');win.focus()}}
if(result_thank>-1){var data={'action':'cf7rl_get_form_thank','formid':formid,};jQuery.ajax({type:"POST",data:data,dataType:"json",async:!1,url:cf7rl_ajax_object.cf7rl_ajax_url,xhrFields:{withCredentials:!0},success:function(response){var formidPrefix='wpcf7-f';var formid_new=formidPrefix+formid;jQuery('[id^="'+formid_new+'"]').html(response.html)}})}}})}})