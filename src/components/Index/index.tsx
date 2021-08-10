/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-useless-escape */
import React, { memo, useState, useEffect } from 'react';
import { Input, List } from 'antd';
import PinyinMatch from 'pinyin-match';
import styles from './index.less';
import './cover.css';

const resource = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'asdasdad',
  '搜索',
  '哈哈哈哈',
  '斯卡哈了我',
  '(asjdhakjshdkajsd)',
];

const AdvancedImageSetting: React.FC = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e: any) => {
    const { value } = e.target;
    setSearch(value.trim());
    if (!value.trim()) {
      setList([]);
      return;
    }

    const arr: string[] | ((prevState: never[]) => never[]) = [];

    resource.map((item) => {
      // todo
      // core
      // 需要优化搜索

      const res: boolean | number[] = PinyinMatch.match(item, value);
      if (res) {
        console.log(res, item);
        const str = item.slice(res[0], res[1] + 1);
        const final = item.replace(str, `<span style="color: red">${str}</span>`);
        arr.push(final);
      }
      return item;
    });
    setList(arr);
  };

  useEffect(() => {
    console.log(list);
  }, []);
  return (
    <div className={styles.IndexMain}>
      <div className={styles.searchBox}>
        <Input
          size="large"
          placeholder="Hi,tools"
          className={styles.search}
          onChange={handleChange}
          value={search}
        />
      </div>
      {list.length > 0 ? (
        // <List bordered dataSource={list} renderItem={(item) => <List.Item>{item}</List.Item>} />
        <List bordered dataSource={list}>
          {list.map((item) => (
            <List.Item>
              <div dangerouslySetInnerHTML={{ __html: item }} className={styles.listDiv}></div>
            </List.Item>
          ))}
        </List>
      ) : (
        ''
      )}
    </div>
  );
};

export default memo(AdvancedImageSetting);
