$('.form_datetime').datetimepicker({
    language: 'zh-CN',
    weekStart: 1,
    todayBtn: true,
    autoclose: true,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    showMeridian: 1,
    minuteStep: 10,
    maxView: 3,
    minView: 2,
    format: 'yyyy/mm/dd',
    linkFormat: "yyyy/mm/dd"
});

$('.form_datetime_today').datetimepicker({
    language: 'zh-CN',
    weekStart: 1,
    todayBtn: true,
    autoclose: true,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    showMeridian: 1,
    minuteStep: 10,
    maxView: 3,
    minView: 2,
    format: 'yyyy/mm/dd',
    linkFormat: "yyyy/mm/dd",
    startDate: new Date()
});

$('.form_hourtime').datetimepicker({
    language: 'zh-CN',
    weekStart: 1,
    todayBtn: true,
    autoclose: true,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    minuteStep: 10,
    maxView: 3,
    minView: 0,
    format: "yyyy/mm/dd hh:ii",
    linkFormat: "yyyy/mm/dd hh:ii",
});

$('.form_hourtime_today').datetimepicker({
    language: 'zh-CN',
    weekStart: 1,
    todayBtn: true,
    autoclose: true,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    minuteStep: 10,
    maxView: 3,
    minView: 0,
    format: "yyyy/mm/dd hh:ii",
    linkFormat: "yyyy/mm/dd hh:ii",
    startDate: new Date()
});

$('.form_datetime_year').datetimepicker({
    language: 'zh-CN',
    autoclose: true,
    todayBtn: false,
    startView: 4,
    forceParse: 0,
    maxView: 4,
    minView: 2,
    format: "yyyy/mm/dd",
    linkFormat: "yyyy/mm/dd",
    endDate: new Date()
});

var startTime = new Date();
var endTime = new Date();
endTime.setFullYear(startTime.getFullYear() + 1);

$('.form_datetime_toendtime').datetimepicker({
    language: 'zh-CN',
    weekStart: 1,
    todayBtn: true,
    autoclose: true,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    showMeridian: 1,
    minuteStep: 10,
    maxView: 3,
    minView: 2,
    format: 'yyyy/mm/dd',
    linkFormat: "yyyy/mm/dd",
    startDate: startTime,
    initialDate: endTime
});