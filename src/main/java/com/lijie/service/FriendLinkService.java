package com.lijie.service;

import com.lijie.model.FriendLink;
import com.lijie.model.Result;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * @author: lijie
 * @Date: 2019/5/16 17:08
 * Describe:
 */
public interface FriendLinkService {

    Result addFriendLink(FriendLink friendLink);

    JSONArray getAllFriendLink();

    Result updateFriendLink(FriendLink friendLink, int id);

    Result deleteFriendLink(int id);

    Result getFriendLink();
}
