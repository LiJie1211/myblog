package com.lijie.mapper;

import com.lijie.model.Album;
import com.lijie.model.Photo;
import com.lijie.model.Role;
import com.lijie.model.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author: lijie
 * Describe: user表SQL语句
 */
@Mapper
@Repository
public interface AlbumMapper {

    @Select("select * from album where id=#{id}")
    @Results({
            @Result(column = "albumname", property = "albumname"),
            @Result(column = "photonum", property = "photonum"),
            @Result(column = "id", property = "photos", javaType = List.class, many = @Many(select = "com.lijie.mapper.AlbumMapper.getPhotosByAlbumId")),
    })
    Album getAlbumnameAndphotosById(@Param("id") int id);

    @Select("select p.id,p.photoname,p.photourl,p.`describe` from album a LEFT JOIN album_photo alp on a.id= alp.aid LEFT JOIN photo p on alp.pid=p.id where a.id=#{id}")
    List<Photo> getPhotosByAlbumId(int id);

    @Select("select * from album where uid=#{uid}")
    List<Album> findAlbumByUserId(@Param("uid") int uid);

    @Select("select * from album where id=#{id}")
    Album findAlbumById(@Param("id") int id);
}
