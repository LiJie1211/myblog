package com.lijie.utils;

/**
 * @author: lijie
 * Describe: 测试MD5加密
 */
public class testMD5 {

	public static void main(String[] args) {
		MD5Util m = new MD5Util();
		System.out.println(m.encode("123"));
	}

}
