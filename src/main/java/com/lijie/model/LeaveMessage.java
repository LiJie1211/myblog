package com.lijie.model;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author: lijie
 * Describe: 留言
 */
@Data
@NoArgsConstructor
public class LeaveMessage {

    private int id;

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPageName() {
		return pageName;
	}

	public void setPageName(String pageName) {
		this.pageName = pageName;
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public int getAnswererId() {
		return answererId;
	}

	public void setAnswererId(int answererId) {
		this.answererId = answererId;
	}

	public int getRespondentId() {
		return respondentId;
	}

	public void setRespondentId(int respondentId) {
		this.respondentId = respondentId;
	}

	public String getLeaveMessageDate() {
		return leaveMessageDate;
	}

	public void setLeaveMessageDate(String leaveMessageDate) {
		this.leaveMessageDate = leaveMessageDate;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public String getLeaveMessageContent() {
		return leaveMessageContent;
	}

	public void setLeaveMessageContent(String leaveMessageContent) {
		this.leaveMessageContent = leaveMessageContent;
	}

	public int getIsRead() {
		return isRead;
	}

	public void setIsRead(int isRead) {
		this.isRead = isRead;
	}

	/**
     * 留言页
     */
    private String pageName;

    /**
     * 留言的父id 若是留言则为 0，则是留言中的回复则为对应留言的id
     */
    private int pId=0;

    /**
     * 留言者
     */
    private int answererId;

    /**
     * 被回复者
     */
    private int respondentId;

    /**
     * 留言日期
     */
    private String leaveMessageDate;

    /**
     * 喜欢数
     */
    private int likes=0;

    /**
     * 留言内容
     */
    private String leaveMessageContent;

    /**
     * 该条留言是否已读  1--未读   0--已读
     */
    private int isRead = 1;

    public LeaveMessage(String pageName, int answererId, int respondentId, String leaveMessageDate, String leaveMessageContent) {
        this.pageName = pageName;
        this.answererId = answererId;
        this.respondentId = respondentId;
        this.leaveMessageDate = leaveMessageDate;
        this.leaveMessageContent = leaveMessageContent;
    }

	public LeaveMessage(int id, String pageName, int pId, int answererId, int respondentId, String leaveMessageDate,
			int likes, String leaveMessageContent, int isRead) {
		super();
		this.id = id;
		this.pageName = pageName;
		this.pId = pId;
		this.answererId = answererId;
		this.respondentId = respondentId;
		this.leaveMessageDate = leaveMessageDate;
		this.likes = likes;
		this.leaveMessageContent = leaveMessageContent;
		this.isRead = isRead;
	}
	
	public LeaveMessage(int id, String pageName, int pId, int answererId, int respondentId, String leaveMessageDate,
			int likes, String leaveMessageContent, boolean isRead) {
		super();
		this.id = id;
		this.pageName = pageName;
		this.pId = pId;
		this.answererId = answererId;
		this.respondentId = respondentId;
		this.leaveMessageDate = leaveMessageDate;
		this.likes = likes;
		this.leaveMessageContent = leaveMessageContent;
		this.isRead = isRead ? 1 : 0;
	}
	
	public LeaveMessage(int id, String pageName, int answererId, String leaveMessageDate, String leaveMessageContent) {
		super();
		this.id = id;
		this.pageName = pageName;
		this.answererId = answererId;
		this.leaveMessageDate = leaveMessageDate;
		this.leaveMessageContent = leaveMessageContent;
	}
}
