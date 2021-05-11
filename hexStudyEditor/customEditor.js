//文本编辑器
var CustomEditor = function () {

    //编辑器配置
    function MInit(data, data2) {
        HexStudy.Editor.manualInit(data, {
            content: data2,
            toolbarConfig: ['removeFormat', 'FontName', 'AutoFont', 'italic', 'bold', 'underline', 'underlineMore', 'underlineselect', 'justifyleft', 'justifycenter', 'justifyright', 'subscript', 'superscript'],
            modulesConfig: ['table', 'picture', 'formula', 'phonogram']
        });
    }

    //编辑器配置2(空格专用)
    function MInit_Blank(data, data2) {
        HexStudy.Editor.manualInit(data, {
            content: data2,
            toolbarConfig: ['removeFormat', 'FontName', 'AutoFont', 'italic', 'bold', 'underline', 'underlineMore', 'underlineselect', 'justifyleft', 'justifycenter', 'justifyright', 'subscript', 'superscript', 'Blank'],
            modulesConfig: ['table', 'picture', 'formula', 'phonogram']
        });
    }

    //获取编辑器内容
    function EditorContent(data) {
        var resd = "";
        if (jQuery(data) != undefined && jQuery(data) != "" && jQuery(data).length > 0) {
            resd = HexStudy.Editor.getContent(jQuery(data));
        }
        return resd;
    }

    //获取编辑器内容(纯文本)
    function EditorContentText(data) {
        var resd = "";
        if (jQuery(data) != undefined && jQuery(data) != "" && jQuery(data).length > 0) {
            resd = HexStudy.Editor.getContent(jQuery(data), true);
        }
        return resd;
    }

    //设置编辑器内容(str为''时清空内容)
    function SetContent(data, str) {
        HexStudy.Editor.setContent($(data), str);
    }

    //获取精简值
    function GetLatexFormula(data) {
        return HexStudy.Editor.getLatexFormula(data);
    }

    return {
        "MInit": MInit,
        "MInit_Blank": MInit_Blank,
        "EditorContent": EditorContent,
        "EditorContentText": EditorContentText,
        "SetContent": SetContent,
        "GetLatexFormula": GetLatexFormula,
    }
}()