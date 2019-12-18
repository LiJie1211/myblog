package com.lijie.controller;

import com.lijie.service.ArticleService;
import com.lijie.utils.TransCodingUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.Map;

/**
 * @author: lijie
 * Describe: 所有页面跳转
 */
@Controller
public class GameCenterControl {

    /**
     * 跳转推箱子游戏
     */
    @GetMapping("/tuixiangzi")
    public String tuixiangzi(){
        return "/games/tuixiangzi";
    }

    /**
     * 跳转3D魔方游戏
     */
    @GetMapping("/mofang")
    public String mofang(){
        return "/games/mofang";
    }

    /**
     * 跳转单机泡泡龙游戏
     */
    @GetMapping("/paopaolong")
    public String paopaolong(){
        return "/games/paopaolong";
    }

}
