package com.lijie.service.security;

import com.lijie.mapper.AlbumMapper;
import com.lijie.mapper.UserMapper;
import com.lijie.model.Album;
import com.lijie.model.Photo;
import com.lijie.model.Role;
import com.lijie.model.User;
import com.lijie.service.UserService;
import com.lijie.utils.TimeUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @author: lijie
 * Describe: 用户登录处理
 */
@Service
public class CustomUserServiceImpl implements UserDetailsService{

    @Autowired
    UserService userService;
    @Autowired
    UserMapper userMapper;
    @Autowired
    AlbumMapper albumMapper;

    @Override
    public UserDetails loadUserByUsername(String phone) throws UsernameNotFoundException {

        System.out.println("用户电话：" + phone);
        User user = userMapper.getUsernameAndRolesByPhone(phone);
        if(user == null){
            throw  new UsernameNotFoundException("用户不存在");
        }
        System.out.println("用户密码：" + user.getPassword());
        for(Role role : user.getRoles()){
        	System.out.println("用户角色：" + role.getName());
        }
        TimeUtil timeUtil = new TimeUtil();
        String recentlyLanded = timeUtil.getFormatDateForSix();
        userService.updateRecentlyLanded(user.getUsername(), recentlyLanded);
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();

        for(Role role : user.getRoles()){
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }
}
