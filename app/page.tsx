import { fetchCars } from "@/utils";
import { IHomeParams } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";

export default async function Home({ searchParams }: IHomeParams) {
  let limit = searchParams.limit || 10;

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    fuel: searchParams.fuel || "",
    year: searchParams.year || new Date().getFullYear(),
    limit: limit,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>

          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car) => (
                  // eslint-disable-next-line react/jsx-key
                  <CarCard car={car} />
                ))}
              </div>

              <ShowMore
                pageNumber={limit / 10}
                isNext={(limit || 10) > allCars.length}
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-lx font-bold">Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
