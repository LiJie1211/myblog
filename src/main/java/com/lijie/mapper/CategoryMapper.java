package com.lijie.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.lijie.model.Categories;

import java.util.List;

/**
 * @author: lijie
 * Describe: 分类sql
 */
@Mapper
@Repository
public interface CategoryMapper {

    @Insert("insert into categories(categoryName) value(#{categoryName})")
    void addCategory(Categories categories);

    @Select("select categoryName from categories")
    List<String> findCategoriesName();

    @Select("select count(*) from categories")
    int countCategoriesNum();

    @Select("select id,categoryName from categories")
    List<Categories> findAllCategories();

    @Delete("delete from categories where categoryName=#{categoryName}")
    void deleteCategory(String categoryName);

    @Select("select IFNULL((select id from categories where categoryName=#{categoryName}),0)")
    int findIsExistByCategoryName(String categoryName);

}
