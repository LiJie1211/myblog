package com.lijie.model;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author: lijie
 * @Date: 2018/6/5 19:41
 * Describe: 权限
 */
@Data
@NoArgsConstructor
public class Photo {

    private int id;

    private String photoname;

    private String photourl;

    private String describe;

	public int getId() {
		return id;
	}

	public String getPhotoname() {
		return photoname;
	}

	public String getPhotourl() {
		return photourl;
	}

	public String getDescribe() {
		return describe;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setPhotoname(String photoname) {
		this.photoname = photoname;
	}

	public void setPhotourl(String photourl) {
		this.photourl = photourl;
	}

	public void setDescribe(String describe) {
		this.describe = describe;
	}

	public Photo(int id, String photoname, String photourl, String describe) {
		this.id = id;
		this.photoname = photoname;
		this.photourl = photourl;
		this.describe = describe;
	}

	public Photo(String photoname, String photourl, String describe) {
		this.photoname = photoname;
		this.photourl = photourl;
		this.describe = describe;
	}
}
