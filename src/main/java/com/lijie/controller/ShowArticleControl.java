package com.lijie.controller;

import com.lijie.model.ArticleLikesRecord;
import com.lijie.service.ArticleLikesRecordService;
import com.lijie.service.ArticleService;
import com.lijie.service.RedisService;
import com.lijie.service.UserService;
import com.lijie.utils.TimeUtil;
import com.lijie.utils.TransCodingUtil;

import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;

/**
 * @author: lijie
 * Describe: 文章显示页面
 */
@Controller
public class ShowArticleControl {

    private Logger logger = LoggerFactory.getLogger(ShowArticleControl.class);

    @Autowired
    ArticleLikesRecordService articleLikesRecordService;
    @Autowired
    ArticleService articleService;
    @Autowired
    UserService userService;
    @Autowired
    RedisService redisService;

    /**
     *  获取文章
     * @param articleId 文章id
     * @return
     */
    @PostMapping("/getArticleByArticleId")
    public @ResponseBody JSONObject getArticleById(@RequestParam("articleId") String articleId,
                                                                    @AuthenticationPrincipal Principal principal){
        String username = null;
        try {
            username = principal.getName();
        } catch (NullPointerException e){
            logger.info("This user is not login");
        }
        JSONObject jsonObject = articleService.getArticleByArticleId(Long.parseLong(articleId),username);
        return jsonObject;
    }




    /**
     * 点赞
     * @param articleId 文章号
     * @return
     */
    @GetMapping("/addArticleLike")
    public @ResponseBody int addArticleLike(@RequestParam("articleId") String articleId,
                                     @AuthenticationPrincipal Principal principal){

        String username="";
        try {
            username = principal.getName();
        }catch (NullPointerException e){
            logger.error("username " + username + " is not login");
            return -1;
        }

        if(articleLikesRecordService.isLiked(Long.parseLong(articleId), username)){
            logger.info("你已经点过赞了");
            return -2;
        }
        int likes = articleService.updateLikeByArticleId(Long.parseLong(articleId));
        ArticleLikesRecord articleLikesRecord = new ArticleLikesRecord(Long.parseLong(articleId), userService.findIdByUsername(username), new TimeUtil().getFormatDateForFive());
        articleLikesRecordService.insertArticleLikesRecord(articleLikesRecord);
        redisService.readThumbsUpRecordOnRedis("articleThumbsUp", 1);
        return likes;
    }

}
