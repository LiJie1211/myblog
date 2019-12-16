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
public class Role {

    private int id;

    private String name;

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Role(int id, String name) {
        this.id = id;
        this.name = name;
    }
	
	public Role(String name) {
        this.name = name;
    }
	
}
