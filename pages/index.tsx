import Head from "next/head";
import { useState } from "react";
import Card from "../components/Card";
import Layout, { siteTitle } from "../components/layout";
import Search from "../components/Search";
import Select from "../components/Select";
import consonants, { ConsonantClass, IConsonant } from "../data/consonants";

const filterConsonants = (consonants: IConsonant[], filter: string) => {
  if (filter === "") {
    return consonants;
  }
  return consonants.filter((consonant) => consonant.class === filter);
};

const searchConsonants = (consonants: IConsonant[], search: string) => {
  const trimmedValue = search.toLowerCase().trim();
  if (trimmedValue === "") {
    return consonants;
  }

  return consonants.filter(
    (consonant) =>
      consonant.class.includes(trimmedValue) ||
      consonant.meaning.includes(trimmedValue) ||
      consonant.rtgs.includes(trimmedValue) ||
      consonant.symbol.includes(trimmedValue) ||
      consonant.thai.includes(trimmedValue) ||
      consonant.transliteration.includes(trimmedValue)
  );
};

export default function Home({ allPostsData }) {
  const [searchValue, setSearchValue] = useState("");
  const [toneFilter, setToneFilter] = useState("");
  const searchedConsonants = searchConsonants(consonants, searchValue);
  const filteredConsonants = filterConsonants(searchedConsonants, toneFilter);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>
        <p>Learn Thai Online</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      <section className="mb-8">
        <p className="text-lg mb-2">Search:</p>
        <Search
          onChange={setSearchValue}
          placeholder="search ..."
          type="search"
          value={searchValue}
        />
      </section>
      <section className="mb-8">
        <p className="text-lg mb-2">Filters:</p>
        <Select
          onChange={(value: string) => setToneFilter(value)}
          label="Consonant Class"
          value={toneFilter}
          options={[
            { value: "", description: "all" },
            { value: ConsonantClass.low, description: ConsonantClass.low },
            { value: ConsonantClass.mid, description: ConsonantClass.mid },
            { value: ConsonantClass.high, description: ConsonantClass.high },
          ]}
        />
      </section>
      <section>
        <ul>
          {filteredConsonants.map((consonant) => (
            <Card consonant={consonant} key={consonant.id} />
          ))}
        </ul>
      </section>
    </Layout>
  );
}
