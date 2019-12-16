package com.lijie.model;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author: lijie
 * @Date: 2018/7/22 20:15
 * Describe: 悄悄话
 */
@Data
@NoArgsConstructor
public class PrivateWord {

    private int id;

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPrivateWord() {
		return privateWord;
	}

	public void setPrivateWord(String privateWord) {
		this.privateWord = privateWord;
	}

	public int getPublisherId() {
		return publisherId;
	}

	public void setPublisherId(int publisherId) {
		this.publisherId = publisherId;
	}

	public int getReplierId() {
		return replierId;
	}

	public void setReplierId(int replierId) {
		this.replierId = replierId;
	}

	public String getReplyContent() {
		return replyContent;
	}

	public void setReplyContent(String replyContent) {
		this.replyContent = replyContent;
	}

	public String getPublisherDate() {
		return publisherDate;
	}

	public void setPublisherDate(String publisherDate) {
		this.publisherDate = publisherDate;
	}

	/**
     * 悄悄话内容
     */
    private String privateWord;

    /**
     * 发布者
     */
    private int publisherId;

    /**
     * 回复者
     */
    private int  replierId;

    /**
     * 回复内容
     */
    private String replyContent;

    /**
     * 发布时间
     */
    private String publisherDate;

    public PrivateWord(String privateWord, int publisherId, String publisherDate) {
        this.privateWord = privateWord;
        this.publisherId = publisherId;
        this.publisherDate = publisherDate;
    }

    /**
     * 
         * 构造器：将数据库中的string（publisherId,relierId）格式转换为int
     * @param id
     * @param privateWord
     * @param publisherId
     * @param replierId
     * @param replyContent
     * @param publisherDate
     */
	public PrivateWord(int id, String privateWord, String publisherId, String replierId, String replyContent,
			String publisherDate) {
		super();
		this.id = id;
		this.privateWord = privateWord;
		this.publisherId = Integer.parseInt(publisherId);
		this.replierId = Integer.parseInt(replierId);
		this.replyContent = replyContent;
		this.publisherDate = publisherDate;
	}
    
}
