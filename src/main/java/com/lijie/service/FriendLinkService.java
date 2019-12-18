package com.lijie.service;

import com.lijie.model.FriendLink;
import com.lijie.model.Result;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * @author: lijie
 * Describe:友链业务操作
 */
public interface FriendLinkService {

    Result addFriendLink(FriendLink friendLink);

    JSONArray getAllFriendLink();

    Result updateFriendLink(FriendLink friendLink, int id);

    Result deleteFriendLink(int id);

    Result getFriendLink();
}
