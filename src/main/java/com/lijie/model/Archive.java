package com.lijie.model;

import lombok.Data;

/**
 * @author: lijie
 * Describe: 文章归档
 */
@Data
public class Archive {

    private int id;

    /**
     * 归档日期
     */
    private String archiveName;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getArchiveName() {
		return archiveName;
	}

	public void setArchiveName(String archiveName) {
		this.archiveName = archiveName;
	}


}
