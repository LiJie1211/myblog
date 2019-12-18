package com.lijie.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * @author: lijie
 * Describe: 用户实体类
 */
@Data
@NoArgsConstructor
public class Album {

	/**
	 * 相册id
	 */
    private int id;


	/**
	 * 用户id
	 */
	private int uid;

    /**
     * 相册名
     */
    private String albumname;

	/**
	 * 图片数量
	 */
	private int photonum;

    /**
     * 相册描述
     */
    private String describe;

	/**
	 * 相册图片
	 */
	private List<Photo> photos;

	public int getId() {
		return id;
	}

	public int getUid() {
		return uid;
	}

	public String getAlbumname() {
		return albumname;
	}

	public int getPhotonum() {
		return photonum;
	}

	public String getDescribe() {
		return describe;
	}

	public List<Photo> getPhotos() {
		return photos;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public void setAlbumname(String albumname) {
		this.albumname = albumname;
	}

	public void setPhotonum(int photonum) {
		this.photonum = photonum;
	}

	public void setDescribe(String describe) {
		this.describe = describe;
	}

	public void setPhotos(List<Photo> photos) {
		this.photos = photos;
	}

	public Album(int id, int uid, String albumname, int photonum, String describe, List<Photo> photos) {
		this.id = id;
		this.uid = uid;
		this.albumname = albumname;
		this.photonum = photonum;
		this.describe = describe;
		this.photos = photos;
	}

	public Album(int id, int uid, String albumname, int photonum, String describe) {
		this.id = id;
		this.uid = uid;
		this.albumname = albumname;
		this.photonum = photonum;
		this.describe = describe;
	}

}
