package com.xjt.dao;

import com.xjt.model.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IUserDao {

    /**
     * 通过数量获取随机条数的数据
     * @return
     */
    List<User> selectList(Integer num);

    User getOne();

    /**
     * 修改中奖为几等奖
     * @param status
     * @param id
     */
    void updateStatus(@Param("status") Integer status,@Param("id") Integer id);

    /**
     * 查中奖名单
     * @param status
     * @return
     */
    List<User> getStatus(Integer status);

    void del();

    List<User> getAll();

    User getSurplus();
}
