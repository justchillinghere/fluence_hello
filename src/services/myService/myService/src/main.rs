#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

pub fn main() {}

#[marine]
pub fn greeting(name: String) -> String {
    format!("Hi, {}", name)
}

#[marine]
pub fn get_time_of_node() -> String {
    let time = std::time::SystemTime::now();
    match time.duration_since(std::time::UNIX_EPOCH) {
        Ok(n) => n.as_secs().to_string(),
        Err(_) => String::from("0"),
    }
}
