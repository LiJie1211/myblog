package com.lijie.utils;

import com.lijie.model.Result;

/**
 * @author: lijie
 * Describe: 返回统一格式封装工具
 */
public class ResultUtil {

    public static Result success(String msg) {
        return success(null, msg);
    }

    public static Result success(Object object, String msg) {
        Result result = new Result();
        result.setCode(200);
        result.setMsg(msg);
        result.setData(object);
        return result;
    }

    public static Result success(Integer code, Object object, String msg) {
        Result result = new Result();
        result.setCode(code);
        result.setMsg(msg);
        result.setData(object);
        return result;
    }

    public static Result error(Integer code, String msg) {
        Result result = new Result();
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }
}
