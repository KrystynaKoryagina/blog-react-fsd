const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      searchParams.set(name, value);
    }

    if (!value) {
      searchParams.delete(name);
    }
  });
  return `?${searchParams.toString()}`;
};

/**
 * Custom function to add query params to URL
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params));
}

// TODO use createSearchParams from react ????
/*
  const navigateToChat = () => {
    navigate({
      pathname: '/chat',
      search: `?${createSearchParams(formValues)}`,
    });
  };
*/
// TODO тесты урок 59 Большой урок. Фильтры. Сортировка. Поиск. Tabs. useDebounce 01:03:17
