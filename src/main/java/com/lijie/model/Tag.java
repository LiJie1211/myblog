package com.lijie.model;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author: lijie
 * Describe: 标签
 */
@Data
@NoArgsConstructor
public class Tag {

    private int id;

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTagName() {
		return tagName;
	}

	public void setTagName(String tagName) {
		this.tagName = tagName;
	}

	public int getTagSize() {
		return tagSize;
	}

	public void setTagSize(int tagSize) {
		this.tagSize = tagSize;
	}

	/**
     * 标签名
     */
    private String tagName;

    /**
     * 标签大小
     */
    private int tagSize;

    public Tag(String tagName, int tagSize) {
        this.tagName = tagName;
        this.tagSize = tagSize;
    }

	public Tag(int id, String tagName, int tagSize) {
		super();
		this.id = id;
		this.tagName = tagName;
		this.tagSize = tagSize;
	}
}
