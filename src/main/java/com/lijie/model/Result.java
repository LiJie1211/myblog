package com.lijie.model;

import lombok.Data;

/**
 * @author: lijie
 * @Date: 2019/5/18 17:15
 * Describe: 返回统一的响应格式
 */
@Data
public class Result<T> {

    /**
     * 错误码
     */
    private Integer code;

    /**
     * 提示信息
     */
    private String msg;

    public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	/**
     * 具体内容
     */
    private  T data;

}
