require 'test_helper'

class Api::GenresControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_genres_index_url
    assert_response :success
  end

  test "should get show" do
    get api_genres_show_url
    assert_response :success
  end

  test "should get create" do
    get api_genres_create_url
    assert_response :success
  end

  test "should get update" do
    get api_genres_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_genres_destroy_url
    assert_response :success
  end

end
