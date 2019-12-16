package com.lijie.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.lijie.constant.RoleConstant;
import com.lijie.mapper.UserMapper;
import com.lijie.model.User;
import com.lijie.service.UserService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author: lijie
 * @Date: 2018/6/4 15:56
 * Describe: user表接口具体业务逻辑
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;
    
    private Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Override
    public User findUserByPhone(String phone) {
        return userMapper.findUserByPhone(phone);
    }

    @Override
    public String findUsernameById(int id) {
        return userMapper.findUsernameById(id);
    }

    @Override
    public String insert(User user) {

        user.setUsername(user.getUsername().trim().replaceAll(" ", ""));
        String username = user.getUsername();

        if(username.length() > 35 || "".equals(username)){
            return "4";
        }
        if(userIsExist(user.getPhone())){
            return "1";
        }
        if("male".equals(user.getGender())){
            user.setAvatarImgUrl("https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/noLogin_male.jpg");
        } else {
            user.setAvatarImgUrl("https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/noLogin_female.jpg");
        }
        userMapper.insert(user);
        int userId = userMapper.findUserIdByPhone(user.getPhone());
        insertRole(userId, RoleConstant.ROLE_USER);
        return "2";
    }

    @Override
    public int findUserIdByPhone(String phone) {
        return 0;
    }

    @Override
    public void updatePasswordByPhone(String phone, String password) {
        userMapper.updatePassword(phone, password);
//        密码修改成功后注销当前用户
        SecurityContextHolder.getContext().setAuthentication(null);
    }

    @Override
    public String findPhoneByUsername(String username) {
        return userMapper.findPhoneByUsername(username);
    }

    @Override
    public int findIdByUsername(String username) {
        return userMapper.findIdByUsername(username);
    }

    @Override
    public User findUsernameByPhone(String phone) {
        return userMapper.findUsernameByPhone(phone);
    }

    @Override
    public void updateRecentlyLanded(String username, String recentlyLanded) {
        String phone = userMapper.findPhoneByUsername(username);
        userMapper.updateRecentlyLanded(phone, recentlyLanded);
    }

    @Override
    public boolean usernameIsExist(String username) {
        User user = userMapper.findUsernameByUsername(username);
        return user != null;
    }

    @Override
    public boolean isSuperAdmin(String phone) {
        int userId = userMapper.findUserIdByPhone(phone);
        List<Object> roleIds = userMapper.findRoleIdByUserId(userId);

        for(Object i : roleIds){
            if((int)i == 3){
                return true;
            }
        }
        return false;
    }

    @Override
    public void updateAvatarImgUrlById(String avatarImgUrl, int id) {
        userMapper.updateAvatarImgUrlById(avatarImgUrl, id);
    }

    @Override
    public JSONObject getHeadPortraitUrl(int id) {
        JSONObject jsonObject = new JSONObject();
        String avatarImgUrl = userMapper.getHeadPortraitUrl(id);
        if(!"".equals(avatarImgUrl) && avatarImgUrl != null){
            jsonObject.put("status",200);
            jsonObject.put("avatarImgUrl",avatarImgUrl);
        }
        return jsonObject;
    }

    @Override
    public JSONObject getUserPersonalInfoByUsername(String username) {
        User user = userMapper.getUserPersonalInfoByUsername(username);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("status",200);
        JSONObject userJon = new JSONObject();
        userJon.put("phone",user.getPhone());
        userJon.put("username",user.getUsername());
        userJon.put("gender",user.getGender());
        userJon.put("trueName",user.getTrueName());
        userJon.put("birthday",user.getBirthday());
        userJon.put("email",user.getEmail());
        userJon.put("personalBrief",user.getPersonalBrief());
        userJon.put("avatarImgUrl",user.getAvatarImgUrl());
        jsonObject.put("result",userJon);
        return jsonObject;
    }

    @Override
    public JSONObject savePersonalDate(User user, String username) {
        JSONObject returnJson = new JSONObject();

        user.setUsername(user.getUsername().trim().replaceAll(" ",""));
        String newName = user.getUsername();
        if(newName.length() > 35){
            returnJson.put("status",501);
            return returnJson;
        } else if ("".equals(newName)){
            returnJson.put("status",502);
            return returnJson;
        }

        //改了昵称
        if(!newName.equals(username)){
            if(usernameIsExist(newName)){
                returnJson.put("status",500);
                return returnJson;
            }
            returnJson.put("status",200);
            //注销当前登录用户
            SecurityContextHolder.getContext().setAuthentication(null);
        }
        //没改昵称
        else {
            returnJson.put("status",201);
        }
        userMapper.savePersonalDate(user, username);

        return returnJson;
    }

    @Override
    public String getHeadPortraitUrlByUserId(int userId) {
        return userMapper.getHeadPortraitUrl(userId);
    }

    @Override
    public int countUserNum() {
        return userMapper.countUserNum();
    }

    /**
     * 增加用户权限
     * @param userId 用户id
     * @param roleId 权限id
     */
    private void insertRole(int userId, int roleId) {
        userMapper.insertRole(userId, roleId);
    }

    /**
     * 通过手机号判断用户是否存在
     * @param phone 手机号
     * @return true--存在  false--不存在
     */
    private boolean userIsExist(String phone){
        User user = userMapper.findUserByPhone(phone);
        return user != null;
    }
    
    @Override
    public JSONObject getUserManagement(int rows, int pageNum) {
        PageHelper.startPage(pageNum, rows);
        List<User> users = userMapper.getUserManagement();
        PageInfo<User> pageInfo = new PageInfo<>(users);
        JSONArray returnJsonArray = new JSONArray();
        JSONObject returnJson = new JSONObject();
        JSONObject userJson;
        for(User user : users){
        	userJson = new JSONObject();
        	userJson.put("id",user.getId());
        	userJson.put("phone",user.getPhone());
        	userJson.put("username",user.getUsername());
        	userJson.put("trueName",user.getTrueName());
        	userJson.put("email",user.getEmail());
        	userJson.put("gender",user.getGender());
        	userJson.put("roles",user.getRoles());
        	
            returnJsonArray.add(userJson);
        }
        returnJson.put("status",200);
        returnJson.put("result",returnJsonArray);
        JSONObject pageJson = new JSONObject();
        pageJson.put("pageNum",pageInfo.getPageNum());
        pageJson.put("pageSize",pageInfo.getPageSize());
        pageJson.put("total",pageInfo.getTotal());
        pageJson.put("pages",pageInfo.getPages());
        pageJson.put("isFirstPage",pageInfo.isIsFirstPage());
        pageJson.put("isLastPage",pageInfo.isIsLastPage());

        returnJson.put("pageInfo",pageJson);

        return returnJson;
    }
    
    @Override
    public int deleteUser(int id) {
        try {
            User deleteUser = userMapper.findUserById(id);
            //删除用户
            userMapper.deleteByUserId(deleteUser.getId());
            userMapper.deleteRolesByUserId(deleteUser.getId());
            //删除与用户相关的角色记录
        }catch (Exception e){
            logger.error("删除用户失败，用户id=" + id);
            return 0;
        }
        return 1;
    }
}
